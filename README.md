# Portfolio

A Razor Pages portfolio for presenting my software development projects, skills, and development journey.

The portfolio acts as the central presentation site.  
The actual applications remain independent projects hosted on their own subdomains and stored in their own GitHub repositories.

---

## Planned Project Structure

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
│   ├── Index.cshtml
│   ├── Index.cshtml.cs
│   │
│   ├── Projects
│   │   ├── Index.cshtml
│   │   ├── Index.cshtml.cs
│   │   ├── CirkusLuna.cshtml
│   │   └── FutureProject.cshtml
│   │
│   └── Shared
│       ├── _Layout.cshtml
│       └── reusable partials/components
│
├── wwwroot
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

The structure will grow as new functionality is required.  
Folders and components do not need to be created before they are actually used.

---

## Website Structure

```text
Portfolio
│
├── Home
│   ├── Hero
│   ├── About
│   ├── Featured Projects
│   └── Contact
│
├── Projects
│   ├── Project Overview
│   │
│   ├── Cirkus Luna
│   │   ├── Project Description
│   │   ├── Screenshots
│   │   ├── Technologies
│   │   ├── Development Process
│   │   ├── Challenges / Solutions
│   │   ├── Live Project Link
│   │   └── GitHub Repository Link
│   │
│   └── Future Projects
│
└── External Links
    └── GitHub
```

---

## Project Separation

The portfolio does **not** contain copies of the actual applications.

For example:

```text
Portfolio
│
└── Cirkus Luna Case Study
    │
    ├── Description
    ├── Screenshots
    ├── Technologies
    ├── Development Story
    │
    ├── Live Project
    │   └── cirkusluna.itloesninger.dk
    │
    └── Source Code
        └── GitHub Repository
```

The responsibilities are therefore separated:

```text
Portfolio
    ↓
Presents the project

Subdomain
    ↓
Runs the actual application

GitHub
    ↓
Contains the source code
```

---

## Razor Pages Responsibilities

The shared layout should only contain elements used across the website:

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
Index.cshtml
│
├── Hero
├── About
├── Featured Projects
└── Contact
```

Future project pages can then use the same layout:

```text
/
/Projects
/Projects/CirkusLuna
/Projects/FutureProject
```

---

## Navigation

```text
MH                              Menu
                                  │
                                  ├── About
                                  ├── Projects
                                  ├── Contact
                                  └── GitHub ↗
```

`MH` acts as the Home link and returns to the main page.

GitHub is an external link and opens the GitHub profile/repository separately.

---

## Design Direction

The portfolio will initially build on the existing Bootstrap Grayscale theme.

The goal is to gradually replace the original template styling with a more personal design while keeping:

```text
Responsive Bootstrap layout
        ↓
Clean black / white / greyscale foundation
        ↓
Project-focused presentation
        ↓
Storytelling sections
        ↓
Subtle animations and transitions
        ↓
Interactive project presentation
```

Project screenshots and personal images can later introduce additional colour without requiring the entire website design to depend on them.

---

## Development Plan

```text
1. Clean Razor Pages structure
        ↓
2. Separate _Layout.cshtml and Index.cshtml correctly
        ↓
3. Remove unused Grayscale template content
        ↓
4. Clean Bootstrap / CSS setup
        ↓
5. Establish the visual identity
        ↓
6. Build the reusable project presentation system
        ↓
7. Add Cirkus Luna as the first real project
        ↓
8. Connect the live Cirkus Luna subdomain
        ↓
9. Connect the corresponding GitHub repository
        ↓
10. Improve responsive behaviour
        ↓
11. Add storytelling, animations, and other visual features
        ↓
12. Add future projects without redesigning the portfolio
```
