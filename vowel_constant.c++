#include<iostream>
int main ()
{
    char C;
    std::cout<<"enter a alphabet=";
    std::cin>>C;
     
    if(C=='a'|| C=='e'||C=='i'||C=='O'||C=='U')
    {
        std::cout<<"vowel";
    }
    else{
        std::cout<<"constant";
    }
    return 0;
}