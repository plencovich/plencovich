# Diego Mariano Plencovich [ PLENCO ]
## Hola! 👋

Mi nombre es Diego Plencovich, soy de Argentina.

* Actualmente estoy trabajando en el departamento IT de [PlanRombo Argentina](https://www.planrombo.com.ar)
* También trabajo de desarrollador web y consultor informático de forma freelance.


```php
<?php

namespace Plencovich;

class About extends Me
{
    public function getCurrentWorkplace(): array
    {
        return [
            'workplace' => [
                'company' => 'CDA Informática',
                'position' => 'DevOps / WebDeveloper / Analista Funcional en PlanRombo-Renault Argentina'
            ],
            'freelance' => [
                'company' => 'Plen.co',
                'position' => 'Consultoría Informática'
            ]
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
- Instagram: https://www.instagram.com/plencovich
- Telegram: https://t.me/Plenco
- Email: diego@plen.co
