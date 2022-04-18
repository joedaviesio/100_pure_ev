let x = 'summative_fc'
console.log(x);

$.getJSON("/js/data.json", function(data) 

    {    
    //html id vars
    let bonneville = document.getElementById("bonneville");
    let smart = document.getElementById("smart");
    let tesla = document.getElementById("tesla");
    let bulli = document.getElementById("bulli");
    let page_broken = document.getElementById("page_broken");
    let ev_info = document.getElementById("ev_info");
    let video_x = document.getElementById("video_x");

    // subform
    const sub_form = document.querySelector('#sub_form');

    // barNumberPicker
    let my_div = document.getElementById('test_a');

    createBarNumPicker(my_div,6, 1);

    my_div.onclick = function(){

    const pickedNum = pickBarNum(my_div);

    console.log(pickedNum);
    
    let x = localStorage.getItem(pickedNum);
    
    console.log(x);

    }

    //submission, manipulation and display

    sub_form.addEventListener('submit', submission_func);
        function submission_func(event)
        {
            //input_defs
            event.preventDefault();
            var input_data = new FormData(sub_form);
            page_broken.style.display = 'none';
            video_x.style.display = "none";
            ev_info.style.display = 'none';
            //input_vars
            const pickedNum = pickBarNum(my_div);
            console.log(pickedNum);
            let pickup_date = new Date (input_data.get("first_date"));
            let dropoff_date = new Date (input_data.get("second_date"));
            console.log(pickup_date);
            console.log(dropoff_date);
             // below function of .getTime() turns date into miliseconds (how many miliseconds passed since a specific date called Unix time)
            let date_difference_in_miliseconds = dropoff_date.getTime() - pickup_date.getTime();
            let difference_in_days = date_difference_in_miliseconds / (1000*3600*24);
            let kms = input_data.get('kms');
            //consoles
            console.log(kms);
            console.log(difference_in_days);
            console.log(pickedNum);

            //container_display
            if(kms == 0)console.log('kms == 0');
            let overlay_container = document.getElementById('overlay_container');
            overlay_container.style.display = 'flex';

                for(i in data)
    
                    if ((pickedNum >= data[i].min_passengers &&pickedNum <= data[i].max_passengers) && (difference_in_days >= data[i].min_days && difference_in_days <= data[i].max_days ))
        
                    {
                        console.log('hello');
                        document.getElementById(i).style.display = 'flex';
                        //consoles
                        console.log(document.getElementById(i).childNodes[7].childNodes[3].childNodes);
                        console.log(document.getElementById(i).childNodes[5].childNodes[5]);
                        //
                        document.getElementById(i).childNodes[5].childNodes[5].innerHTML = 'Passengers: ' + pickedNum;
                        document.getElementById(i).childNodes[7].childNodes[3].childNodes[1].innerHTML = '$' + data[i].daily_cost * difference_in_days;

                        if(kms == 0)
                            {
                            document.getElementById(i).childNodes[7].childNodes[3].childNodes[3].innerHTML = 'NA';
                            document.getElementById(i).childNodes[7].childNodes[3].childNodes[5].innerHTML = 'NA';
                            }
                            else 
                            {
                            document.getElementById(i).childNodes[7].childNodes[3].childNodes[3].innerHTML =
                            (Math.round(kms / ( 100 / data[i].petrol))) + 'L';
                            document.getElementById(i).childNodes[7].childNodes[3].childNodes[5].innerHTML = ('$') + (((Math.round(kms / ( 100 / data[i].petrol)) * 2.45)) + (data[i].daily_cost * difference_in_days));
                            }

                    }

                    else document.getElementById(i).style.display = 'none';
                        
         
                    if (pickedNum == 0 || difference_in_days >= 16 || difference_in_days < 0 || (pickedNum == 1 && difference_in_days > 10))
                        document.getElementById('dates_unavailable').style.display = 'flex';
                        else document.getElementById('dates_unavailable').style.display = 'none';

        };

    let book_button = document.getElementsByClassName('book_button_container');

        for (z=0; z<book_button.length; z++)
        book_button[z].onclick = function() 
        {
        bonneville.style.display = "none";
        tesla.style.display = "none";
        smart.style.display = "none";
        bulli.style.display = "none";
        page_broken.style.display = 'flex';
    
    };

    let fa_car = document.getElementById('fa_car');
    console.log(fa_car);

    fa_car.onclick = function()
        {
            overlay_container.style.display = 'flex';
            ev_info.style.display = 'flex';
            video_x.style.display = 'none';
            bonneville.style.display = "none";
            tesla.style.display = "none";
            smart.style.display = "none";
            bulli.style.display = "none";
            page_broken.style.display = 'none';
            document.getElementById('dates_unavailable').style.display = 'none';
            
        
        };

        

    })
