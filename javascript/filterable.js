var header = document.querySelectorAll('.header')
var item = document.querySelectorAll('.item');
for (var i = 0; i < header.length; i++)
{
    header[i].addEventListener('click', function(){
        //add even listener to all the header elements
        for(var k = 0; k < header.length; k++)
        {
            //remove active class to all elements
            header[k].classList.remove('active');
        }        
        //add active to current class
        this.classList.add('active');
        //get the attribute aka the value it contains
        var filter = this.getAttribute('data-filter');
        for (var j = 0; j < item.length; j++)
        {
            //add class hide to all elements
            item[j].classList.add('hide');
            if (item[j].getAttribute('data-item') == filter || filter == 'all')
            {
                //only remove it if the current element has the filter value or filter value is equal to all
                item[j].classList.remove('hide');
            }
        }
    })
}