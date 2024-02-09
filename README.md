# Diego Mariano Plencovich [ PLENCO ]
## Hola! 👋

Mi nombre es Diego Plencovich, soy de Argentina.

> [!IMPORTANT]
> Actualmente estoy abierto a propuestas de trabajo; y sigo con tareas de desarrollador web y consultor informático de forma freelance.

> [!NOTE]
> Último trabajo en relación de dependencia con [CDA Informática](https://www.cdainfo.com) con asignación del cliente Renault Argentina para el departamento IT de [PlanRombo Argentina](https://www.planrombo.com.ar)



```php
<?php

namespace Plencovich;

class About extends Me
{
    public function getCurrentWorkplace(): array
    {
        return [
            'freelance' => [
                'company' => 'Plen.co',
                'position' => 'Consultoría Informática'
            ],
            'lastWork' => [
                'company' => 'CDA Informática',
                'position' => 'DevOps / WebDeveloper / Analista Funcional en PlanRombo-Renault Argentina',
                'duration' => '3 Años'
            ],
        ];
    }

    public function getDailyKnowledge(): array
    {
        return [
            Php::class,
            Javascript::class,
            Symfony::class,
            Laravel::class,
            ReactJs::class,
            ReactNative::class,
            TailwindCss::class,
            Aws::class,
            GoogleCloud::class,
            Docker::class
        ];
    }
}
```

## Contact

- Linkedin: https://ar.linkedin.com/in/plencovich
- Email: diego@plen.co
- CV: https://cv.plen.co
