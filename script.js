let input = document.querySelector("#input");
let uniArr = [];
let websiteArr = [];
let apiUrl = "http://universities.hipolabs.com/search?country=";

const onClickHandler = async (e) => {
  let country = input.value;
  const result = await fetch(apiUrl + country);
  const data = await result.json();

  console.log(`data: ${data[0].name}`);
  const uniNumber = data.length;
  //   console.log(uniNumber);

  for (let i = 0; i <= uniNumber; i++) {
    // let uniName = data[i].name;
    // console.log(`"uniStr" ${uniStr}`);
    let uniStr = "";
    uniStr += `
    <tr>
                    <th scope="row">1</th>
                    <td class="name">${data[0].name}</td>
                    <td><a href="${data[0].web_pages}" class="link">${data[0].web_pages}</a></td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td class="name">${data[1].name}</td>
                    <td><a href="${data[1].web_pages}" class="link">${data[1].web_pages}</a></td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td class="name">${data[2].name}</td>
                    <td><a href="${data[2].web_pages}" class="link">${data[2].web_pages}</a></td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td class="name">${data[3].name}</td>
                    <td><a href="${data[3].web_pages}" class="link">${data[3].web_pages}</a></td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td class="name">${data[4].name}</td>
                    <td><a href="${data[4].web_pages}" class="link">${data[4].web_pages}</a></td>
                </tr>
      `;

    document.querySelector(".table-body").innerHTML = uniStr;
  }
  return;
};

//  <p class="name">${data[5].name}</p>
//       <p class="name">${data[1].name}</p>
//       <p class="name">${data[2].name}</p>
//        <p class="name">${data[3].name}</p>
//          <p class="name">${data[4].name}</p>

//   let webStr = "";
//     webStr += `
// <a href="${data[0].web_pages}">${data[0].web_pages}</a>
// <a href="${data[1].web_pages}">${data[1].web_pages}</a>
// <a href="${data[2].web_pages}">${data[2].web_pages}</a>
// <a href="${data[3].web_pages}">${data[3].web_pages}</a>
// <a href="${data[4].web_pages}">${data[4].web_pages}</a>
// `;

//  document.querySelector(".link").innerHTML = webStr;
