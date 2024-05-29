 let name = "sakib_al_hasan"

 let first_name = name.slice(0,5)
 let Last_name = name.split("_")
 let complete_name = name.replace("_"," ")
 let text = "I love cats. Cats are very easy to love. Cats are very popular."
 const iterator = text.matchAll("Cats");
 console.log(Array.from(iterator))