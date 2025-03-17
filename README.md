# Diego Mariano Plencovich [ PLENCO ]
## Hola! 👋

Mi nombre es Diego Plencovich, soy de Argentina.

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
                    'company' => 'Utrace',
                    'position' => 'Tech Leader',
                    'duration' => 'present',
                    'employment_type' => 'contractor'
                ],
            ],
            'work_experience' => [
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
- Email: diego@plen.co
- CV: https://cv.plen.co
