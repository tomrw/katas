<?php declare(strict_types=1);

use PHPUnit\Framework\TestCase;

final class MathTest extends TestCase
{
    public function testShouldAdd(): void
    {
        self::assertEquals(3, Math::add(1, 2));
    }

    public function testShouldAddMoreNumbers(): void
    {
        self::assertEquals(5, Math::add(2, 3));
    }
}
