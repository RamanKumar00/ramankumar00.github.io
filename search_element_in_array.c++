#include<iostream>
using namespace std;
int main()
{
    int arr[5]={5,7,6,9,11};
    int index=-1;
    int num;
    cout<<"enter the number which you have to find: ";
    cin>>num;
    for(int i=0;i<=5;i++)
    {
        if(arr[i]==num)
        {   
            index=i;
            break;
        }
    }
    cout<<"your given number is on"<< index;
    return 0;

}