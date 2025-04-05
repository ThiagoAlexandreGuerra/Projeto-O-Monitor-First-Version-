import re
import json

# Caminho do arquivo
nome_do_arquivo = "q00002.txt"
caminho_do_arquivo = f"C:/Users/thiag/OneDrive/Documentos/projeto_o_monitor/API/file_txt/{nome_do_arquivo}"

# Dicionário de chaves para buscar no texto
chaves = {
    "texto": "<T>(.*?)<T>",
    "pergunta": "<P>(.*?)<P>",
    "Alternativa_a": "<A>(.*?)<A>",
    "Alternativa_b": "<B>(.*?)<B>",
    "Alternativa_c": "<C>(.*?)<C>",
    "Alternativa_d": "<D>(.*?)<D>",
    "Alternativa_e": "<E>(.*?)<E>",
    "resposta": "<R>(.*?)<R>"
}

# Abre e lê o conteúdo do arquivo
try:
    with open(caminho_do_arquivo, "r", encoding="utf-8") as f:
        file_content = f.read()
except FileNotFoundError:
    print(json.dumps({"erro": "Arquivo não encontrado"}))
    exit()

# Dicionário para armazenar os resultados extraídos
resultado = {}

# Extrai cada chave e valor usando expressões regulares
for chave, padrao in chaves.items():
    match = re.search(padrao, file_content, re.DOTALL)
    if match:
        resultado[chave] = match.group(1).strip()
    else:
        resultado[chave] = "Não encontrado"

# Imprime o resultado como JSON
print(json.dumps(resultado))
