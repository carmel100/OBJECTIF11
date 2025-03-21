

/* NB : Ajouter des variables en vous basant sur le rôle de chaque fonction  cela arrêtera les erreurs présents
  
  dans la console */

  

 // Inverser une chaîne : écrivez une fonction qui inverse une chaîne donnée.

  function Inverser(p) {
     return p.split('').reverse().join('')
  }

  console.log(Inverser());

 // Compter les caractères : créez une fonction qui compte le nombre de caractères dans une chaîne.

   function Compter(count) {

      return count.length
   }

    console.log(Compter());
    
 // Mettre les mots en majuscule : implémentez une fonction qui met en majuscule la première lettre de chaque mot d'une phrase.


    function main(j) {
        
        return j.charAt(0).toUpperCase() + j.slice(1,11)
    }

    console.log(main());
    
 // Rechercher le maximum et le minimum : écrivez des fonctions pour trouver les valeurs maximales et minimales dans un tableau de nombres.

    
    let moa = [12,15,20,32,50]

    function RechercherMaximumEtMinimum(d) {
        
          return d.filter((p,k) =>{

               if (k==0 || k == 4) {
                return p
               } })
                
        }
    
    console.log( RechercherMaximumEtMinimum());

// Somme d'un tableau : créez une fonction qui calcule la somme de tous les éléments d'un tableau.

    function Somme(o) {

        let somme = 0
        
          o.map((s)=> somme += s)

          return somme
    }

     console.log(Somme());
     
// Filtrer le tableau : implémentez une fonction qui filtre les éléments d’un tableau en fonction d’une condition donnée.


    function Ranger(v) {
        
      return  v.filter((i,j) =>{

            if (j%2 === 0 || j%3 === 0) {

                return i ;
                
                
            }


        })
    }
  
       console.log(Ranger());
       
// Factorielle : Écrivez une fonction pour calculer la factorielle d'un nombre donné.

       function CalculerFactorielle(m) {

          if (m == 1) {
            return m
          }

          if (m <1 ) {
             return 'calcul  impossible '
          }

          if (m>1) {
            return m*CalculerFactorielle(m-1)
          } 

        
       }


      console.log(CalculerFactorielle());


// Vérification des nombres premiers : créez une fonction pour vérifier si un nombre est premier ou non.

          

      function VerificationNombrePremier(p) {

        if (p <= 1) {

            return `ce nombre n'est pas un nombre premier`

        }

         if ((p%2 == 0 && p/2 > 1) ||(p%3 == 0 && p/3 >1 )) {
              return `ce nombre n'est pas un nombre premier`
         } 
         else if (p%2 != 0 || p%3 != 0 ) {
            return  ` ce nombre est  un nombre premier `
          
         }
              
         }

       console.log(VerificationNombrePremier());

//  Suite de Fibonacci : Implémenter une fonction pour générer la suite de Fibonacci jusqu'à un nombre donné de termes.

       function GenererUneSuiteFibonacci(n) {
        
        if (n <= 0) return [];
        if (n === 1) return [0];
        let fib = [0, 1];
        for (let i = 2; i < n; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
        return fib

      }

       console.log(GenererUneSuiteFibonacci());
       
