<?php

use Illuminate\Database\Seeder;

class TodosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Todo::create([
            'name' => 'Todo1',
            'completed' => 1
        ]);

        App\Todo::create([
            'name' => 'Todo2',
            'completed' => 1
        ]);
        App\Todo::create([
            'name' => 'Todo3',
            'completed' => 0
        ]);  
        App\Todo::create([
            'name' => 'Todo4',
            'completed' => 0
        ]);
    }
}
