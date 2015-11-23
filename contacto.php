<?php
    include('header.php');
    $errorName='';
    $errorEmail='';
    $errorMessage='';
    $message='';
    include('enviar.php');
?>

<div id="wrapper">
    <?php include('menu.php'); ?>

    <div class="content-one">
        <section class="content-menu">
            <div class="content-sub-menu">
                <figure>
                    <a href="audiovisual.php">
                        <img src="images/buzon.png">
                    </a>
                </figure>

            </div>
        </section>
        <section class="content-body">
            <h1>Contacto</h1>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5341802911225!2d-74.0504834858872!3d4.676795343168174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a921a9166bf%3A0x1c29279b4c345958!2sParque+de+la+93!5e0!3m2!1ses!2sco!4v1447901582272" width="100%" height="300px" frameborder="0" style="border:0" allowfullscreen></iframe>

            <div id="contact">

                <?php
                if($message!='')
                {
                    echo '<p style="color: #33B933">'.$message.'</p>';
                }
                ?>

                <form  method="post" action="">

                           <label for="name">Nombre</label>

                            <input type="text" name="name" id="name" value="<?php echo $_POST['name']; ?>">

                            <?php
                                if($errorName!='')
                                {
                                    echo '<p>'.$errorName.'</p>';
                                }
                            ?>

                           <label for="email"> E-Mail</label>

                            <input type="text" name="email" id="email" value="<?php echo $_POST['email']; ?>">

                            <?php
                            if($errorEmail!='')
                            {
                                echo '<p >'.$errorEmail.'</p>';
                            }
                            ?>

                            <label for="message">Mensaje</label>

                            <textarea name="message" id="message" ><?php echo $_POST['message']; ?></textarea>

                            <?php
                            if($errorMessage!='')
                            {
                                echo '<p >'.$errorMessage.'</p>';
                            }
                            ?>

                            <input  type="submit" value="Enviar" class="send" name="contacto">


                </form>
                <div id="data-simon">
                    <p>
                        administrativo@simonsein.com
                    </p>
                    <p>
                        Cra 15 # 93a - 84 oficina 609
                    </p>
                    <p>
                        Bogotá Colombia
                    </p>
                    <p>
                        Teléfonos:
                    </p>
                    <p>
                        3144834705, 3125923363, 3134585205
                    </p>
                    <p>
                        (57 1) 757 0236, (57 1) 467 3162, (57 1) 467 3161
                    </p>
                    <p>
                           <a href="https://twitter.com/SimonSein_Ltda" target="_blank"><img src="images/twitter.png"></a>
                            <a href="https://www.facebook.com/simon.sein.31?fref=ts" target="_blank"><img src="images/facebook.png"></a>
                           <a href="https://www.youtube.com/channel/UC5cDmU27ooIA5i-vbiey71g" target="_blank"><img src="images/youtube.png"></a>
                    </p>

                </div>
            </div>

        </section>
    </div>

</div>

</style>

<?php include('footer.php'); ?>

</body>
</html>