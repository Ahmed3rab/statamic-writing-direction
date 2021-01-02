<?php

namespace Ahmed3rab\StatamicWritingDirection;

use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__.'/../dist/js/writingdirection.js',
    ];

    public function boot()
    {
        parent::boot();
        Augmentor::addMark(WritingDirection::class);
    }
}
