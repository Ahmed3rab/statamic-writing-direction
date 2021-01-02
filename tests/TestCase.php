<?php

namespace Ahmed3rab\StatamicWritingDirection\Tests;

use Ahmed3rab\StatamicWritingDirection\ServiceProvider;

class TestCase extends \Orchestra\Testbench\TestCase
{
    public function setUp(): void
    {
        parent::setUp();
    }

    protected function getPackageProviders($app)
    {
        return [
            ServiceProvider::class,
        ];
    }

    protected function getEnvironmentSetUp($app)
    {
    }
}
