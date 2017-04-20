

class Person{
    String name="Soumya";
    public void sayName(){
        //String name="Local";
        System.out.println("i am "+name)
        System.out.println("i am "+this.name)
    }

}

public class Java_Demo{
    public static void main(String args[]){
        Person p=new Person();
        p.sayName();
    }
}