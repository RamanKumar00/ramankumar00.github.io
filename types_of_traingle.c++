#include<iostream>
int main()
{
    int side1,side2,side3;
    std::cout<<"enter three sides of a traingle:";
    std::cin>>side1>>side2>>side3;

    if(side1==side2 && side1==side3)
    {
        std::cout<<"traingle is equilateral ";
    }
    else if (side1==side2||side1==side3||side2==side3)
    {
        std::cout<<"traingle is isoscles";
    }
    else{
        std::cout<<"taringle is sclane";
    }
    return 0;
}