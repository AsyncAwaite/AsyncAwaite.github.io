<?php

$token = "5154649149:AAHcEqhr2fpjsxrkUj1h4fCSYg20hhM0rh4";

$chat_id = "-1001774453449";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $input = json_decode(file_get_contents("php://input"), true);
  if (!empty($input['name']) && !empty($input['phone']))  {
    if (isset($input['name'])) {
      if (!empty($input['name'])) {
        $name = strip_tags($input['name']);
        $nameFieldset = "Имя: ";
      }
    }
    if (isset($input['title'])) {
      if (!empty($input['title'])) {
        $title = strip_tags($input['title']);
        $titleFieldset = "Цель: ";
      }
    }

    if (isset($input['phone'])) {
      if (!empty($input['phone'])) {
        $phone = strip_tags($input['phone']);
        $phoneFieldset = "Телефон: ";
      }
    }
 
    $arr = array(
      $titleFieldset => $title,
      $nameFieldset => $name,
      $phoneFieldset => $phone
    );
    foreach ($arr as $key => $value) {
      $txt .= "<b>" . $key . "</b> " . $value . "%0A";
    };
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");
  }
}
