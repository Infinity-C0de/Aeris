
import json


def carregar_cidades():

    try:
        with open("cidades.json", "r", encoding="utf-8") as arquivo:
            cidades = json.load(arquivo)

        return cidades

    except FileNotFoundError:
        print("Arquivo cidades.json não encontrado.")
        return None

    except json.JSONDecodeError:
        print("Erro na estrutura do arquivo de cidades.")
        return None


def visualizar_cidades(cidades):

    print("\n======= CIDADES DISPONIVEIS =======")

    if len(cidades) == 0:
        print("Nenhuma cidade cadastrada.")
    else:
        for indice, cidade in enumerate(cidades):
            print(f"{indice + 1} - {cidade['cidade']}")


def consultar_cidade(cidades):

    visualizar_cidades(cidades)

    if len(cidades) == 0:
        return

    try:
        escolha = int(input(
            "\nDigite o número correspondente a cidade que deseja consultar (0 para voltar): "
        ))

        if escolha == 0:
            return

        if escolha < 1 or escolha > len(cidades):
            print("Cidade não encontrada!")
            return

        cidade = cidades[escolha - 1]

        pm25 = cidade["pm25"]
        pm10 = cidade["pm10"]

        if pm25 < 0 or pm10 < 0:
            print("Os valores da cidade são inválidos.")
            return

        if pm25 <= 15 and pm10 <= 45:
            qualidade = "Boa"

        elif pm25 <= 50 and pm10 <= 100:
            qualidade = "Intermediária"

        else:
            qualidade = "Crítica"

        print("\n======= RESULTADO DA CONSULTA =======")
        print(f"Cidade: {cidade['cidade']}")
        print(f"PM2.5: {pm25} ug/m3")
        print(f"PM10: {pm10} ug/m3")
        print(f"Qualidade do ar: {qualidade}")

        salvar = input(
            "\nDeseja salvar esta consulta? (Digite o n° correspondente)\n"
            "1 - Sim\n"
            "2 - Não\n"
            "Escolha: "
        )

        if salvar == "1":

            try:
                with open("historico.json", "r", encoding="utf-8") as arquivo:
                    historico = json.load(arquivo)

            except FileNotFoundError:
                historico = []

            except json.JSONDecodeError:
                print("Erro ao ler o histórico.")
                return


            cidade_existente = False

            for consulta in historico:
                if consulta["cidade"] == cidade["cidade"]:
                    cidade_existente = True
                    break

            if cidade_existente:
                print("Esta cidade já foi adicionada ao histórico.")

            else:
                historico.append({
                    "cidade": cidade["cidade"],
                    "pm25": pm25,
                    "pm10": pm10,
                    "qualidade": qualidade
                })

                with open("historico.json", "w", encoding="utf-8") as arquivo:
                    json.dump(historico, arquivo, ensure_ascii=False, indent=4)

                print("Consulta salva com sucesso!")

        elif salvar == "2":
            print("Consulta não salva.")

        else:
            print("Opção inválida. Consulta não salva.")

    except ValueError:
        print("Digite um número válido!")

    except KeyError:
        print("Os dados da cidade estão incompletos.")


def visualizar_historico():

    try:
        with open("historico.json", "r", encoding="utf-8") as arquivo:
            historico = json.load(arquivo)

        print("\n======= HISTÓRICO DE CONSULTAS =======")

        if len(historico) == 0:
            print("Nenhuma consulta salva.")

        else:
            for indice, consulta in enumerate(historico):

                print(f"\nConsulta {indice + 1}")
                print(f"Cidade: {consulta['cidade']}")
                print(f"PM2.5: {consulta['pm25']} ug/m3")
                print(f"PM10: {consulta['pm10']} ug/m3")
                print(f"Qualidade do ar: {consulta['qualidade']}")

    except FileNotFoundError:
        print("Nenhum histórico encontrado.")

    except json.JSONDecodeError:
        print("Erro ao ler o arquivo de histórico.")


def excluir_historico():

    try:
        with open("historico.json", "r", encoding="utf-8") as arquivo:
            historico = json.load(arquivo)

        if len(historico) == 0:
            print("\nNão existem consultas para excluir.")
            return

        print("\n======= CONSULTAS SALVAS =======")

        for indice, consulta in enumerate(historico):
            print(f"{indice + 1} - {consulta['cidade']}")

        try:
            escolha = int(input("\nDigite o número da consulta que deseja excluir (0 para voltar): "))

            if escolha == 0:
                return

            if escolha < 1 or escolha > len(historico):
                print("Opção inválida!")
                return

            historico.pop(escolha - 1)

            with open("historico.json", "w", encoding="utf-8") as arquivo:
                json.dump(historico, arquivo, ensure_ascii=False, indent=4)

            print("Consulta excluída com sucesso!")

        except ValueError:
            print("Digite um número válido!")

    except FileNotFoundError:
        print("Nenhum histórico encontrado.")

    except json.JSONDecodeError:
        print("Erro ao ler o arquivo de histórico.")


def main():

    cidades = carregar_cidades()

    if cidades is None:
        return

    while True:

        print("\n========================================")
        print("                 AERIS")
        print("       MONITORAMENTO DA QUALIDADE DO AR")
        print("========================================")
        print("1 - Consultar cidade e qualidade do ar")
        print("2 - Visualizar histórico de consultas")
        print("3 - Excluir consulta do histórico")
        print("0 - Sair")
        print("========================================")

        opcao = input("Escolha uma opção: ")

        if opcao == "1":
            consultar_cidade(cidades)

        elif opcao == "2":
            visualizar_historico()

        elif opcao == "3":
            excluir_historico()

        elif opcao == "0":
            print("\nObrigada por utilizar a Aeris!")
            break

        else:
            print("\nOpção inválida! Tente novamente.")


main()
