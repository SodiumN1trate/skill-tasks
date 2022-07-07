<?php

$array = [1, 2, 4, 5, 3, 2, 6, 4, 5];

$output = [];

$repeats = 0;

foreach($array as $i) {
  foreach($array as $z) {
    if($i === $z) {
      $repeats+=1;
    }
  } 
  if($repeats === 1) {
      array_push($output, $i);
  }
  $repeats = 0;
}

var_dump($output);