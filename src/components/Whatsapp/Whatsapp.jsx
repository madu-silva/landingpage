import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

function Whatsapp() {
    return (
        <FloatingWhatsApp
            phoneNumber="+5538999719257"
            accountName="Adv. Nicolas Ribeiro Neves"
            avatar = "/images/hero/nicolas-wpp.jpg"    
            chatMessage="Olá! Seja bem-vindo(a) ao nosso suporte. Como posso te ajudar?"
            statusMessage="Disponível"
            placeholder="Digite a sua mensagem"
            allowClickAway={true}
            allowEsc={true}
        />
    )
}

export default Whatsapp;