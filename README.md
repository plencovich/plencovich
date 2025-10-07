# Diego Mariano Plencovich [ PLENCO ]
## Hola! 👋

Mi nombre es Diego Plencovich, soy de Argentina.

Developer Full Stack | PHP Architect | Tech Lead | Agile Project Manager | DevOps Enthusiast

```php
<?php

namespace Plencovich;

class About extends Me
{
    public function getCurrentWorkplace(): array
    {
        return [
            'current_work' => [
                [
                    'company' => 'Provincia NET',
                    'position' => 'Desarrollador PHP / Python - Bapro Medios de Pagos',
                    'duration' => 'present',
                    'employment_type' => 'employee'
                ],
            ],
            'work_experience' => [
                [
                    'company' => 'Qservices',
                    'position' => 'Project Leader -> Prisma Medios de Pago',
                    'duration' => '1 Año',
                    'employment_type' => 'employee'
                ],
                [
                    'company' => 'SuryaDev',
                    'position' => 'Analista Funcional / Web Developer',
                    'duration' => '6 meses',
                    'employment_type' => 'contractor'
                ],
                [
                    'company' => 'InfoControl',
                    'position' => 'Analista Funcional / Web Developer',
                    'duration' => '6 meses',
                    'employment_type' => 'temporary contractor'
                ],
                [
                    'company' => 'CDA Informática',
                    'position' => 'Analista Funcional / Web Developer / DevOps -> Renault Argentina',
                    'duration' => '3 Años',
                    'employment_type' => 'employee'
                ],
                [
                    'company' => 'Zennovia',
                    'position' => 'Analista Funcional / Web Developer',
                    'duration' => '1 Año',
                    'employment_type' => 'contractor'
                ]
            ],
        ];
    }

    public function getDailyKnowledge(): array
    {
        return [
            Php::class,
            Symfony::class,
            Laravel::class,
            Codeigniter::class,
            Javascript::class,
            NodeJs::class,
            ReactJs::class,
            ReactNative::class,
            Aws::class,
            GoogleCloud::class,
            Azure::class,
            Docker::class,
        ];
    }
}
```

## Contact

- Linkedin: https://ar.linkedin.com/in/plencovich
- Email: diego@plencovich.com
