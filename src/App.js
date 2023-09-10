import React, { useMemo } from 'react';
import { useState,useReducer} from 'react';
import './App.css';





function App() {

  const categoryList=[
    {key:1, value:"PHP"},
    {key:2, value:"JavaScript"},
    {key:3, value:"CSS"},  
    {key:4, value:"HTML"},
  ]
  const genders=[
    {key:0,value:"Erkek"},
    {key:1,value:"Kadın"},
    {key:2,value:"Diğer"}
  ];
  const levels=[
    {key:'beginner',value:"Başlangıç"},
    {key:'jr_developer',value:"Junior Developer"},
    {key:'sr_developer',value:"Senior Developer"}
  ];



  const [name,setName]=useState("Tuğrul");
  const [description,setDescription]=useState("React öğreniyorum");
  const [gender,setGender]=useState("2");
  const [categories,setCategories]=useState([2,4]); 
  const [rule,setRule]=useState(true);
  const [rules,setRules]=useState([
    {key:1,value:"1.Kabul Edildi",checked:false},
    {key:2,value:"2.Kabul Edilmedi",checked:false},
    {key:3,value:"3.Kabul Edilmedi",checked:true},
  ]);
 
 
  const [level,setLevel]=useState("jr_developer");


  const checkRule = (key,checked) =>{
    setRules(rules => rules.map(rule=> {
      if(key===rule.key){
        rule.checked=checked;
    }
    return rule;
  }))
}

  const selectedGender = genders.find(g => g.key === gender)

  const selectedCategories = useMemo(() => categoryList.filter(c => categories.includes(c.key)), [categories, categoryList])

  const enabled = rules.every(r => r.checked)

 
 
  

  return (
    <>
    <button onClick={()=>setName("Tuğrul")}>adı resetle</button>
    <input type="text"  value={name} onChange={e =>setName(e.target.value)} /><br/>
   

   <textarea value={description} onChange={e =>setDescription(e.target.value)}></textarea><br/>
  

  <select value={gender} onChange={e =>setGender(e.target.value)}>
    <option value="">Cinsiyet Seçiniz</option>
    {genders.map((gender) =>(<option
    key={gender.key}  value={gender.key}>{gender.value}</option>))}
    </select>
    <br/>
    {JSON.stringify(selectedGender,null,2)}
    <br/>
      <button onClick={()=> setCategories([2,3,4])}>Kategorileri Seç</button>
    <select value={categories} multiple={true} onChange={e =>setCategories([... e.target.selectedOptions].map(option=> +option.value))}>
    {categoryList.map(category =>(<option
    key={category.key}  value={category.key}>{category.value}</option>
    ))}
    </select>
    <br/>
    <pre>{JSON.stringify(selectedCategories,null,2)}</pre>
    <br/>

    <label>
      <input type='checkbox' checked={rule} onChange={r => setRule(r.target.checked)} />
      Kuralları kabul ediyorum
      </label>
      <br/>
      <button disabled={!rules}>Devam et</button>
      <br/>

      {rules.map(rule =>(
         <label key={rule.key}>
         <input type='checkbox' checked={rule.checked} onChange={e => checkRule(rule.key,e.target.checked)}/>
         {rule.value}
         </label>
         ))}
          <br/>

          <pre>{JSON.stringify(rules,null,2)}</pre>
          
          
          <br/>
          <button disabled={!enabled}>Devam et</button>
          
          <br/>

        {levels.map((l,index)=>(
          <label key={index}>
            <input type='radio' value={l.key} checked={l.key===level} onChange={e => setLevel(e.target.value)}/>
            {l.value}
            
          </label>
        ))}

        <br/>
          
  
    
        
    </>

  
 
  );
}


export default App;
