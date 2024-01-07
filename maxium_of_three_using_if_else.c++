#include<iostream>
int main()
{
    int n1,n2,n3;
    std::cin>>n1>>n2>>n3;

    if((n1>n2) && (n1>n3))
        {
            std::cout<<n1;
        }
    else if ((n2>n1)&&(n2>n3))
    {
        std::cout<<n2;
    }
    else(std::cout<<n3);
    return 0;



}
