<?php
    $conn=mysqli_connect("workiz", "root", "", "workiz");
// Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    $_POST = json_decode(file_get_contents('php://input'), true);
    $name=$_POST['name'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $workshop=$_POST['workshop'];
    $comment=$_POST['message'];

    $sql ="INSERT INTO users( name, email, phone, workshop, comment) VALUES('$name','$email','$phone','$workshop','$comment')";
    if (mysqli_query($conn, $sql)) {
        header('Content-type: application/json') ;
        echo json_encode(array('message' => "New record created successfully!"));
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
?>