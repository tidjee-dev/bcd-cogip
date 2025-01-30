<?php

use function Castor\io;
use function Castor\run;

use Castor\Attribute\AsTask;

/*
 * Composer
 */

#[AsTask(description: 'Install composer dependencies', namespace: 'composer')]
function install(): void
{
    io()->title('Installing composer dependencies');
    run('composer install');
    io()->newLine();
    io()->success('Composer dependencies installed');
}

/*
 * Docker
 */
#[AsTask(description: 'Start Docker Stack', namespace: 'docker')]
function start(): void
{
    io()->title('Starting Docker Stack');
    run('docker compose up -d');
    io()->newLine();
    io()->success('Docker Stack started');
}

#[AsTask(description: 'Stop Docker Stack', namespace: 'docker')]
function stop(): void
{
    io()->title('Stopping Docker Stack');
    run('docker compose stop');
    io()->newLine();
    io()->success('Docker Stack stopped');
}


#[AsTask(description: 'Restart Docker Stack', namespace: 'docker')]
function restart(): void
{
    io()->title('Restarting Docker Stack');
    run('docker compose restart');
    io()->newLine();
    io()->success('Docker Stack restarted');
}

/*
 * Symfony
 */
#[AsTask(description: 'Create new Symfony project', namespace: 'symfony')]
function create(): void
{
    io()->title('Creating new Symfony project');
    $projectName = io()->ask('What is the name of the project?', 'app');
    $webapp = io()->confirm('Do you want to create a webapp?', false);
    if ($webapp) {
        run('symfony new ' . $projectName . ' --webapp');
    } else {
        run('symfony new ' . $projectName);
    }
}

#[AsTask(description: 'Start Symfony server', namespace: 'symfony')]
function server(): void
{
    io()->title('Opening Symfony server');
    run('symfony serve -d --listen-ip=localhost');
}

#[AsTask(description: 'Stop Symfony server', namespace: 'symfony')]
function stopServer(): void
{
    io()->title('Stopping Symfony server');
    run('symfony server:stop');
}

/*
 * Symfony
 */
#[AsTask(description: 'Clear Cache', namespace: 'symfony')]
function clear(): void
{
    io()->title('Clearing Cache');
    run('symfony console cache:clear --no-warmup');
}

/*
 * Maker Bundle
 */
#[AsTask(description: 'Create new User Entity', namespace: 'maker')]
function makeUser(): void
{
    io()->title('Creating new User Entity');
    $className = io()->ask('What is the name of the user entity?', 'Users');
    run('symfony console make:user ' . $className);
}

#[AsTask(description: 'Create new Entity', namespace: 'maker')]
function makeEntity(): void
{
    io()->title('Creating new Entity');
    $className = io()->ask('What is the name of the entity?');
    run('symfony console make:entity ' . $className);
}

#[AsTask(description: 'Create new Doctrine Controller', namespace: 'maker')]
function makeController(string $className): void
{
    io()->title('Creating new Doctrine Controller');
    run('symfony console make:controller ' . $className);
}

/*
 * Doctrine
 */
#[AsTask(description: 'Create new Doctrine Migration', namespace: 'doctrine')]
function createMigration(): void
{
    io()->title('Creating new Doctrine Migration');
    run('symfony console make:migration ');
}

#[AsTask(description: 'Run Doctrine Migrations', namespace: 'doctrine')]
function runMigrations(): void
{
    io()->title('Running Doctrine Migrations');
    run('symfony console doctrine:migrations:migrate');
}
