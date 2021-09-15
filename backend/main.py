from flask import Flask, request
import pandas as pd

app = Flask(__name__)

# ALLOWED_EXTENSIONS = { 'txt', 'csv', 'xlsx' }

@app.route('/arquivo', methods=['POST'])
def home():
    if request.method == 'POST':
        data_banco = pd.read_csv(request.files.get('file'), encoding='utf-8', sep=';').rename(columns={'cpf_str':'cpf'}) # arquivo do banco -> csv

        data_pasc = pd.read_csv(request.files.get('file2'), encoding='utf-8', sep=';') # telefone.txt

        combine_csv = pd.merge(data_banco, data_pasc)

        combine_csv = combine_csv[['tipo_contato', 'nome_str', 'vencimento_dat', 'contato', 'classificacao']]

        combine_csv = combine_csv.loc[combine_csv['tipo_contato'] == 'CEL']

        # tamanho dos numeros de telefone celulares
        for i in combine_csv.index:
            if len(str(combine_csv['contato'][i])) != 11:
                combine_csv =  combine_csv.drop(i)
        
        # priorizacao dos contatos
        bons_csv = combine_csv.loc[combine_csv['classificacao'] == '2 - Bom']
        for i in bons_csv.index: 
            nome_cliente = bons_csv['nome_str'][i]
            tel_cliente = bons_csv['contato'][i]
            
            f = open('sms.txt', 'a+')
            mensagem = f'55{tel_cliente}|{nome_cliente}, resgate seu boleto de forma 100% online, rapida e segura! Acesse: pagoufacil.com.br e regularize em segundos!|\n'
            f.write(mensagem)
            print('oi')


        mals_csv = combine_csv.loc[combine_csv['classificacao'] == '9 - Indefinido']

    # 5514999999999|Aline, resgate seu boleto de forma 100% online, rapida e segura! Acesse: pagoufacil.com.br e regularize em segundos!|0.15267759562

    return 'aaaaa'