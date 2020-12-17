function isTouchingg(object1,object2)
  {
   if (Math.abs(object1.x-object2.x) < object1.width/2 + object2.width/2 && Math.abs(object1.y-object2.y) < object1.height/2 + object2.height/2)

  {
  
  return true;

  } else { 
   return false;
  
  }
  }

  function bounceOfff(objectA,objectB)
  {
    if (Math.abs(objectA.x-objectB.x)< objectA.width/2 + objectB.width/2)
    {
      objectA.velocityX = objectA.velocityX *(-1);
     objectB.velocityX = objectB.velocityX *(-1);
    }
  }