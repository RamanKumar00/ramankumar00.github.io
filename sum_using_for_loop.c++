#include<iostream>
int main ()
{
    int n,i,sum=0;
    std::cout<<"enter the value of n:";
    std::cin>>n;

    for(i=1;i<=n;i++)
    {
        sum=sum+i;
    }
    std::cout<<"sum:"<<sum;
    return 0;
}