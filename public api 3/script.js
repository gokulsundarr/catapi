

const api_url="https://cat-fact.herokuapp.com/facts";      

async function getapi(url) {
   
   
     
    const response = await fetch( url);
   
    
    var data = await response.json();
    console.log(data);
   
   
    if (response) {
        hideloader();

    }
    show(data);
}

getapi(api_url);

function hideloader()
{
    document.getElementById('loading').style.display='none';
}

    function show(data) {
        let tab =
            `<tr>
              <th>status</th>
              <th>_id</th>
              <th>text</th>
              <th>type</th>
              
             </tr>`;
       
        
        for (let r of data) {
            tab += `<tr>
        <td>${r.facts} </td>
        <td>${r._id} </td>
        <td>${r.text} </td>
        <td>${r.type} </td>
      
    
    </tr>`;
        }
        document.getElementById("facts").innerHTML = tab;
    }
    

