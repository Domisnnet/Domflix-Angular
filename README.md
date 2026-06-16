flowchart TD
    A([DOMFLIX]):::brand

    subgraph S1[Entrada]
        B[Home]:::home
        B1[Hero principal]:::home
        B2[Seleção de perfis]:::home
        B3[Rows de conteúdo]:::home
        B4[CTA catálogo]:::home
    end

    subgraph S2[Experiência do usuário]
        C[Profiles]:::profiles
        C1[Profile grid]:::profiles
        C2[Profile card]:::profiles
        C3[Criar / editar perfil]:::profiles
    end

    subgraph S3[Exploração de conteúdo]
        D[Catalog]:::catalog
        D1[Catalog filter]:::catalog
        D2[Catalog sort]:::catalog
        D3[Catalog row]:::catalog
        D4[Project card]:::catalog
    end

    subgraph S4[Projetos]
        E[Projects]:::projects
        E1[Project grid]:::projects
        E2[Project preview]:::projects
        E3[Project detail]:::projects
    end

    subgraph S5[Bastidores]
        F[Case Studies]:::cases
        F1[Case study card]:::cases
        F2[Timeline]:::cases
        F3[Metrics]:::cases
        F4[Case detail]:::cases
    end

    subgraph S6[Monetização]
        G[Template Store]:::store
        G1[Pricing card]:::store
        G2[Feature list]:::store
        G3[Download CTA]:::store
        G4[Gumroad link]:::store
    end

    subgraph S7[Ajustes]
        H[Settings]:::settings
        H1[Theme toggle]:::settings
        H2[Language toggle]:::settings
        H3[Layout preferences]:::settings
    end

    A --> B
    A --> C
    A --> D
    A --> E
    A --> F
    A --> G
    A --> H

    B --> B1
    B --> B2
    B --> B3
    B --> B4

    B3 --> F1
    B3 --> D4

    C --> C1
    C --> C2
    C --> C3

    D --> D1
    D --> D2
    D --> D3
    D --> D4

    E --> E1
    E --> E2
    E --> E3

    F --> F1
    F --> F2
    F --> F3
    F --> F4

    G --> G1
    G --> G2
    G --> G3
    G --> G4

    H --> H1
    H --> H2
    H --> H3

    classDef brand fill:#111827,stroke:#f97316,stroke-width:3px,color:#ffffff,font-weight:bold;
    classDef home fill:#1f2937,stroke:#ef4444,stroke-width:1.5px,color:#ffffff;
    classDef profiles fill:#0f172a,stroke:#8b5cf6,stroke-width:1.5px,color:#ffffff;
    classDef catalog fill:#111827,stroke:#06b6d4,stroke-width:1.5px,color:#ffffff;
    classDef projects fill:#0b1220,stroke:#22c55e,stroke-width:1.5px,color:#ffffff;
    classDef cases fill:#111827,stroke:#f59e0b,stroke-width:1.5px,color:#ffffff;
    classDef store fill:#111827,stroke:#ec4899,stroke-width:1.5px,color:#ffffff;
    classDef settings fill:#111827,stroke:#94a3b8,stroke-width:1.5px,color:#ffffff;

    style S1 fill:#0b0f19,stroke:#ef4444,stroke-width:1px,stroke-dasharray: 5 5
    style S2 fill:#0b0f19,stroke:#8b5cf6,stroke-width:1px,stroke-dasharray: 5 5
    style S3 fill:#0b0f19,stroke:#06b6d4,stroke-width:1px,stroke-dasharray: 5 5
    style S4 fill:#0b0f19,stroke:#22c55e,stroke-width:1px,stroke-dasharray: 5 5
    style S5 fill:#0b0f19,stroke:#f59e0b,stroke-width:1px,stroke-dasharray: 5 5
    style S6 fill:#0b0f19,stroke:#ec4899,stroke-width:1px,stroke-dasharray: 5 5
    style S7 fill:#0b0f19,stroke:#94a3b8,stroke-width:1px,stroke-dasharray: 5 5