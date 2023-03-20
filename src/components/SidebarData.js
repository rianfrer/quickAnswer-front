import React from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";


export const SidebarData = [
    {
        title: 'Início',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Conversas',
        path: '/conversas',
        icon: <FaIcons.FaCommentDots />,
        cName: 'nav-text'
    },
    {
        title: 'Agendamentos',
        path: '/agendamentos',
        icon: <FaIcons.FaRegCalendarCheck />,
        cName: 'nav-text'
    },
    {
        title: 'Cadastro de negóico',
        path: '/cadastroNegocio',
        icon: <FaIcons.FaClipboardList />,
        cName: 'nav-text'
    },
    {
        title: 'Cadastro de produtos',
        path: '/cadastroProdutos',
        icon: <BsIcons.BsFillCartPlusFill />,
        cName: 'nav-text'
    },
    {
        title: 'Quadro de atividades',
        path: '/quadroAtividades',
        icon: <FaIcons.FaRegChartBar />,
        cName: 'nav-text'
    },
    {
        title: 'Configurações',
        path: '/configuracoes',
        icon: <BiIcons.BiCog />,
        cName: 'nav-text'
    },
    {
        title: 'Sair',
        path: '/',
        icon: <FaIcons.FaRegArrowAltCircleLeft />,
        cName: 'nav-text'
    }
]