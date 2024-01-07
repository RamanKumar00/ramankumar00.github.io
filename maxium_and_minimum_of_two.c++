#include<iostream>
int main()
{
    int n1,n2,max,min;
    std::cin>>n1>>n2;

    if(n1>n2)
    {
        max=n1;
        min=n2;
    }
    else{
        max=n2;
        min=n1;
    }
    std::cout<<"max= "<<max;
    std::cout<<"min= "<<min;
    return 0;
}