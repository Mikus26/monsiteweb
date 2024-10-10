<?php

namespace App\Form;

use App\Entity\Contact;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('Name',TextType::class,[
                'label' => 'Nom de Famille',
                'attr' => ['class' => 'form-control'
                ]

            ])
            ->add('FirstName',TextType::class,[
                'label' => 'Prénom',
                'attr' => ['class' => 'form-control'
                ]
            ])
            ->add('Mail' ,EmailType::class,[
                'attr' => ['class' => 'form-control'
                ]
            ])
            ->add('Phone',TelType::class,[
                'attr' => ['class' => 'form-control'
                ]
            ])
            ->add('Message',TextareaType::class,[
                'attr' => ['class' => 'form-control',
                ]
            
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Contact::class,
        ]);
    }
}
