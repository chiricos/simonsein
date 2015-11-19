<?php include('header.php'); ?>

<div id="wrapper">
    <?php include('menu.php'); ?>
    <?php
        $i=rand(1, 3);
        echo $i;
        if($i==1)
        {
            ?>
            <video id="video" autoplay="autoplay" preload="auto" loop="loop" >
                    <source src="images/fondo.mp4" type="video/mp4" />
            </video>
    <?php
        }if($i==2){
        ?>
        <video id="video" autoplay="autoplay" preload="auto" loop="loop" >
            <source src="images/fondo1.mp4" type="video/mp4" />
        </video>
        <?php
        }if($i==3){
        ?>
        <div class="body-three"></div>
        <?php
    }
    ?>


</div>

<?php include('footer.php'); ?>

</body>
</html>