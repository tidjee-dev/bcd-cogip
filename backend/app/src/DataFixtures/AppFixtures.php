<?php

namespace App\DataFixtures;

use App\Entity\Types;
use App\Entity\Users;
use App\Entity\Contacts;
use App\Entity\Invoices;
use App\Entity\Companies;
use Faker\Factory as Faker;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class AppFixtures extends Fixture
{
  public function load(ObjectManager $manager): void
  {
    $faker = Faker::create('fr_BE');

    // Users
    $users = [];

    for ($i = 0; $i < 10; $i++) {
      $user = new Users();
      $user->setFirstName($faker->firstName);
      $user->setLastName($faker->lastName);
      $user->setEmail($faker->email);
      $user->setPassword($faker->password);
      $user->setRoles(['ROLE_USER']);
      $user->setCreatedAt(new \DateTimeImmutable($faker->dateTimeBetween('-1 year', '-1 month')->format('Y-m-d H:i:s')));
      $user->setUpdatedAt(new \DateTimeImmutable($faker->dateTimeBetween('-1 month', 'now')->format('Y-m-d H:i:s')));
      $manager->persist($user);
      $users[] = $user;

      $manager->persist($user);
    }

    // Types
    $types = [];

    $typesData = [
      'SA',
      'SARL',
      'SAS',
      'ASBL'
    ];

    foreach ($typesData as $typeName) {
      $type = new Types();
      $type->setName($typeName);
      $type->setCreatedAt(new \DateTimeImmutable($faker->dateTimeBetween('-1 year', '-1 month')->format('Y-m-d H:i:s')));
      $type->setUpdatedAt(new \DateTimeImmutable($faker->dateTimeBetween('-1 month', 'now')->format('Y-m-d H:i:s')));
      $manager->persist($type);
      $types[] = $type;
    }

    // Companies
    $companies = [];

    for ($i = 0; $i < 10; $i++) {
      $company = new Companies();
      $company->setName($faker->company);
      $company->setTypeId($faker->randomElement($types));
      $company->setCountry($faker->country);
      $company->setTva($faker->vat);
      $company->setCreatedAt(new \DateTimeImmutable($faker->dateTimeBetween('-1 year', '-1 month')->format('Y-m-d H:i:s')));
      $company->setUpdatedAt(new \DateTimeImmutable($faker->dateTimeBetween('-1 month', 'now')->format('Y-m-d H:i:s')));

      $companies[] = $company;

      $manager->persist($company);
    }

    // Invoices
    $invoices = [];

    for ($i = 0; $i < 10; $i++) {
      $invoice = new Invoices();
      $invoice->setRef($faker->ean13);
      $invoice->setCompanyId($faker->randomElement($companies));
      $invoice->setCreatedAt(new \DateTimeImmutable($faker->dateTimeBetween('-1 year', '-1 month')->format('Y-m-d H:i:s')));
      $invoice->setUpdatedAt(new \DateTimeImmutable($faker->dateTimeBetween('-1 month', 'now')->format('Y-m-d H:i:s')));

      $invoices[] = $invoice;

      $manager->persist($invoice);
    }

    // Contacts
    $contacts = [];

    for ($i = 0; $i < 10; $i++) {
      $contact = new Contacts();
      $contact->setName($faker->name);
      $contact->setCompanyId($faker->randomElement($companies));
      $contact->setEmail($faker->email);
      $contact->setPhone($faker->phoneNumber);
      $contact->setCreatedAt(new \DateTimeImmutable($faker->dateTimeBetween('-1 year', '-1 month')->format('Y-m-d H:i:s')));
      $contact->setUpdatedAt(new \DateTimeImmutable($faker->dateTimeBetween('-1 month', 'now')->format('Y-m-d H:i:s')));

      $contacts[] = $contact;

      $manager->persist($contact);
    }

    $manager->flush();
  }
}
