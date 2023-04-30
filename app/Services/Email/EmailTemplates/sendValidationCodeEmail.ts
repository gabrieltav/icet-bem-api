export default function getSendValidationCodeEmailHtml(code: string, name: string) {
    return `
    <body style="margin: 0; padding: 0;">
        <section style="width: 100%;">
            <h1 style="width: 100%; text-align: center; color: #000000">
                Olá ${name}
            </h1>

            <h2 style="width: 100%; text-align: center; color: #000000">
                Recebemos o seu pedido de redefinição de senha
            </h2>

            <h3 style="color: #000000; padding: 16px;">
            O código para redefini-la é: 
                <span style="
                    padding: 5px;
                    margin: auto;
                    font-size: 24px !important;
                    font-weight: normal;"
                >
                    ${code}
                </span>
            </h3>

        </section>

        <footer style="background-color: '#000000'; padding: 16px; color: #000000;">
            <div>
                <div style="width: 100% !important; margin-bottom: 24px;">
                    <p style="margin: 0;">Essa mensagem é automática, não é necessário respondê-la.</p>
                </div>
            </div>
        </footer>
    </main>
  </body>`
}