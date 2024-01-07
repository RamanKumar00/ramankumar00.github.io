#include<iostream>
int main()
{
    int n,i;
    std::cout<<"enter the value of n: ";
    std::cin>>n;

    for(i=1;i<=10;i++)
    {
        std::cout<<n<<"*"<<i<<"="<<n*i;
    }
    return 0;
}