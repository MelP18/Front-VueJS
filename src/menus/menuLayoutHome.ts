export const menuTop = [
    {
        icon: "fa-solid fa-user",
        title:'Tableau de bord',
        router:'/',
        isActive:true
    },
    {
        icon: "fa-regular fa-envelope-open",
        title:'Projets',
        router:'/project',
        isActive:false
    },
    {
        icon: "fa-solid fa-layer-group",
        title:'Rapport',
        router:'/report',
        isActive:false
    },
    {
        icon: "fa-solid fa-user",
        title:'Documents',
        router:'/document',
        isActive:false
    },
    {
        icon: " fa-regular fa-envelope",
        title:'Messagerie',
        router:'/message',
        isActive:false
    },
    {
        icon: "fa-solid fa-id-card",
        title:'Paiement',
        router:'/payment',
        isActive:false
    },{
        icon: "fa-solid fa-user",
        title:'Clients',
        router:'/customer',
        isActive:false
    },
    {
        icon: "fa-solid fa-phone",
        title:'Contacts',
        router:'/contacts',
        isActive:false
    }
]

export const menuBottom = [
    {
        icon: "fa-solid fa-gear",
        title:'Paramètres',
        router:'/setting',
        isActive:false
    },
    {
        icon: "fa-solid fa-right-from-bracket",
        title:'Déconnexion',
        router:'/logout',
        isActive:false
    }
  
]