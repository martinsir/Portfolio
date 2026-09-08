# Portfolio Structure

The portfolio website acts as the central presentation layer for my projects.

The actual applications remain separate and are hosted on their own subdomains and GitHub repositories.

## Project Structure

```text
Portfolio
│
├── Models
│   └── Project.cs
│
├── Services
│   └── ProjectService.cs
│
├── Pages
│   │
│   ├── Index.cshtml
│   ├── Index.cshtml.cs
│   │
│   ├── About.cshtml
│   ├── About.cshtml.cs
│   │
│   ├── Projects
│   │   ├── Index.cshtml
│   │   ├── Index.cshtml.cs
│   │   ├── CirkusLuna.cshtml
│   │   └── FutureProject.cshtml
│   │
│   └── Shared
│       ├── _Layout.cshtml
│       ├── _Navbar.cshtml
│       ├── _Footer.cshtml
│       └── reusable components
│
├── wwwroot
│   │
│   ├── css
│   │   ├── site.css
│   │   ├── components.css
│   │   └── animations.css
│   │
│   ├── js
│   │   ├── site.js
│   │   └── animations.js
│   │
│   ├── images
│   │   ├── branding
│   │   └── projects
│   │       ├── cirkus-luna
│   │       └── future-project
│   │
│   └── lib
│
├── Properties
├── appsettings.json
├── Program.cs
└── Portfolio.csproj
```

## Portfolio Architecture

```text
Portfolio Website
│
├── Home
│   ├── Hero
│   ├── About
│   ├── Featured Projects
│   └── Contact
│
├── Projects
│   │
│   ├── Cirkus Luna
│   │   ├── Screenshots
│   │   ├── Description
│   │   ├── Technologies
│   │   ├── Development Story
│   │   ├── Live Project Link
│   │   └── GitHub Link
│   │
│   └── Future Projects
│
└── About
```

## Project Separation

The actual projects are **not stored inside the portfolio application**.

The portfolio only contains:

```text
Project information
Screenshots
Technology information
Case studies
Live-project URLs
GitHub URLs
```

Example:

```text
Portfolio
│
└── Cirkus Luna
    │
    ├── Presentation / Case Study
    │
    ├── Screenshots
    │
    ├── Live Project
    │   └── cirkusluna.itloesninger.dk
    │
    └── Source Code
        └── GitHub Repository
```

## Razor Pages Responsibilities

`_Layout.cshtml` should contain only shared page structure:

```text
_Layout.cshtml
│
├── <head>
├── Navigation
├── @RenderBody()
├── Footer
└── JavaScript
```

The homepage content belongs in:

```text
Pages
└── Index.cshtml
    │
    ├── Hero
    ├── About
    ├── Projects
    ├── Contact
    └── GitHub
```

This keeps the layout reusable for future pages such as:

```text
/Projects
/Projects/CirkusLuna
/Projects/FutureProject
/About
```

## Navigation

```text
MH                          Menu
                              │
                              ├── About
                              ├── Projects
                              ├── Contact
                              └── GitHub ↗
```

`MH` acts as the Home link and returns to the top of the portfolio.

## Development Plan

```text
1. Clean Razor Pages structure
        ↓
2. Separate Layout and Index content
        ↓
3. Clean old Grayscale template code
        ↓
4. Establish portfolio design
        ↓
5. Add project presentation system
        ↓
6. Add Cirkus Luna as first real project
        ↓
7. Link to live subdomain
        ↓
8. Link to GitHub repository
        ↓
9. Add responsive Bootstrap features
        ↓
10. Add animations and storytelling
```
