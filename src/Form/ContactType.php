<?php

namespace App\Form;

use App\Entity\Contact;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
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
        ->add('Name', TextType::class, [
            'label' => 'Nom de Famille',
            'attr' => [
                'class' => 'form-control',
                'pattern' => '^[a-zA-Z]+$'
            ],
            'constraints' => [
                new Regex([
                    'pattern' => '/^[a-zA-Z]+$/',
                    'message' => 'Le nom ne doit contenir que des lettres.'
                ])
            ]
        ])
            ->add('FirstName',TextType::class,[
                'label' => 'Prénom',
                'attr' => [
                'class' => 'form-control',
                'pattern' => '^[a-zA-Z]+$'
            ],
            'constraints' => [
                new Regex([
                    'pattern' => '/^[a-zA-Z]+$/',
                    'message' => 'Le nom ne doit contenir que des lettres.'
                ])
            ]
            ])
            ->add('Mail', EmailType::class, [
                'label' => '',
                'attr' => ['class' => 'form-control'],
                'constraints' => [
                    new Email([
                        'message' => 'L\'adresse e-mail "{{ value }}" n\'est pas valide.',
                    ]),
                    new Regex([
                        'pattern' => '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/',
                        'message' => 'L\'adresse e-mail doit être dans un format valide sans caractères spéciaux.',
                    ]),
                ],
            ])
            ->add('Phone', TelType::class, [
                'attr' => ['class' => 'form-control'],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Le numéro de téléphone ne peut pas être vide.',
                    ]),
                    new Regex([
                        'pattern' => '/^[0-9]{10}$/',
                        'message' => 'Le numéro de téléphone doit contenir exactement 10 chiffres.',
                    ]),
                ],
            ])
            ->add('Message', TextareaType::class, [
                'attr' => ['class' => 'form-control'],
                'constraints' => [
                    new Length(['max' => 1000]),
                    new NotBlank(),
                    new Regex([
                        'pattern' => '/^[a-zA-Z0-9\s\.,!?()-]+$/',
                        'message' => 'Le message contient des caractères non autorisés.'
                    ])
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
