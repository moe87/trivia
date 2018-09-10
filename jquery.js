 <script>
        var correctanswer = 0;
        var incorrectanswer = 0;
        var unanswer = 0;
        var number = 30;
        function mytimer() {
            number -= 1;
            if (number == 0) {
                $("form").submit();

            }
            $("#number").text(number);

        }

        $(document).ready(function () {
            $("#start").click(function () {
                $("#page1").hide();
                $("#page2").show();
                setInterval(mytimer, 1000)

            });

            $("form").submit(function (event) {
                event.preventDefault();
                var name = $("input[type=radio][name=name7]:checked").val();
                if (name === "mike") {
                    correctanswer += 1;
                }
                else if (name == undefined) {
                    unanswer += 1;

                }
                else {
                    incorrectanswer += 1;
                }

                var age = $("input[type=radio][name=age]:checked").val();
                if (age === "30") {
                    correctanswer += 1;
                }
                else if (age == undefined) {
                    unanswer += 1;

                }
                else {
                    incorrectanswer += 1;

                }
                console.log(name)
                console.log(age)

                $("#page2").hide();
                $("#page3").show();
                $("#correct").text(correctanswer);
                $("#incorrect").text(incorrectanswer);
                $("#unanswer").text(unanswer);


            })

        });

    </script>
