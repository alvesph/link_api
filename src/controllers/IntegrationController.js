const Opportunity = require('../models/OpportunityModel');

const { pipedriveApi, blingApi } = require('../services/Integration');

module.exports = {
  async index(req, res) {
    const responseApi = await pipedriveApi.get();

    const integration = await responseApi.data.data.map(({ description, status, value, get_time }) => {
      Opportunity.create({
        description,
        status,
        value,
        get_time
      });

      blingApi.post(
        `pedido/json/?apikey=${process.env.BLING_APP_API_KEY}&xml=
          ${encodeURI(`
            <?xml version="1.0" encoding="utf-8"?>
            <pedido>
              <cliente>
                  <nome>${description}</nome>
                  <tipoPessoa>J</tipoPessoa>
                  <endereco>Rua Visconde de São Gabriel</endereco>
                  <cpf_cnpj>00000000000000</cpf_cnpj>
                  <ie_rg>3067663000</ie_rg>
                  <numero>392</numero>
                  <complemento>Sala 54</complemento>
                  <bairro>Cidade Alta</bairro>
                  <cep>95.700-000</cep>
                  <cidade>Bento Gonçalves</cidade>
                  <uf>RS</uf>
                  <fone>5481153376</fone>
                  <email>teste@teste.com.br</email>
              </cliente>
              <transporte>
                  <transportadora>Transportadora XYZ</transportadora>
                  <tipo_frete>R</tipo_frete>
                  <servico_correios>SEDEX - CONTRATO</servico_correios>
                  <dados_etiqueta>
                      <nome>Endereço de entrega</nome>
                      <endereco>Rua Visconde de São Gabriel</endereco>
                      <numero>392</numero>
                      <complemento>Sala 59</complemento>
                      <municipio>Bento Gonçalves</municipio>
                      <uf>RS</uf>
                      <cep>95.700-000</cep>
                      <bairro>Cidade Alta</bairro>
                  </dados_etiqueta>
                  <volumes>
                      <volume>
                          <servico>SEDEX - CONTRATO</servico>
                          <codigoRastreamento></codigoRastreamento>
                      </volume>
                  </volumes>
              </transporte>
              <itens>
                  <item>
                      <codigo>001</codigo>
                      <descricao>Caneta 001 Teste</descricao>
                      <un>Pç</un>
                      <qtde>1</qtde>
                      <vlr_unit>${value}</vlr_unit>
                  </item>
              </itens>
              <vlr_frete>0</vlr_frete>
              <vlr_desconto>0</vlr_desconto>
              <obs>Testando o campo observações do pedido</obs>
              <obs_internas>Testando o campo observações internas do pedido</obs_internas>
            </pedido>`)}`
      )
      .then(() => {
        return res.status(200).json({ status: integration ? `Integracao realizada com sucesso` : 'Integracao nao realizada' })
      })
      .catch((error) => console.log(error));
    })
  }
}