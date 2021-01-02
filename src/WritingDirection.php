<?php

namespace Ahmed3rab\StatamicWritingDirection;

use ProseMirrorToHtml\Marks\Mark;

class WritingDirection extends Mark
{
    protected $markType = 'direction';
    protected $tagName = 'span';

    public function matching(): bool
    {
        return $this->mark->type === $this->markType;
    }

    public function tag(): ?array
    {
        return [
            ['tag' => 'span',
                'attrs' => [
                    'style' => "direction:{$this->mark->attrs->direction};display :block",
                ],
            ],
        ];
    }
}
