<?php

  $array1 = [1, 2, 3, 5, 6];
  $array2 = [1, 4, 3, 5, 6, 7];

  var_dump(compare($array1, $array2));

  function compare($array1, $array2)
  {
    $output = [];
    foreach ($array1 as $i) {
      foreach ($array2 as $y) {
        if($i === $y) {
          array_push($output, $i);
        }
      }
    }
    return $output;
  }