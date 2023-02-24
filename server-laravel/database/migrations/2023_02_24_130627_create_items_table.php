<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('items', function (Blueprint $table) {
            $table->bigInteger('id')->primary()->nullable(false);
            $table->string('mpn')->nullable();
            $table->integer('price')->nullable()->unsigned();
            $table->integer('sale_price')->nullable()->unsigned();
            $table->integer('vip_price')->nullable()->unsigned();
            $table->integer('stock')->unsigned()->nullable();
            $table->string('availability');
            $table->mediumText('taglia')->nullable();
            $table->integer('parent_id');
            $table->string('title');
            $table->longText('description');
            $table->string('link');
            $table->string('image_link');
            $table->mediumText('product_type');
            $table->string('eta')->nullable();
            $table->string('marche');
            $table->string('genere');
            $table->string('personaggi')->nullable();
            $table->string('colore')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('items');
    }
};
