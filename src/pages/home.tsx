import React from 'react'
import { PieChartProps } from 'interfaces/home'
import {useList} from '@pankod/refine-core'

import 
      {
        PieChart,
        PropertyReferrals,
        TotalRevenue,
        PropertyCard,
        TopAgent
      } from 'components'
import { Typography, Box, Stack } from '@pankod/refine-mui'


const home = () => {
  return (
    <Box>
        <Typography fontWeight={700} fontSize={25} color="#11142D">
              DashBoard
        </Typography>
        <Box mt="20px" display="flex"
        flexWrap="wrap" gap={4}>
            <PieChart
            title="Properties for Sale" 
            value={684}
            series={[75, 25]}
            colors={['#475be8', '#e4e8ef']}
            />
               <PieChart
            title="Properties for Rent" 
            value={550}
            series={[60, 40]}
            colors={['#475ae8', '#e4e8ef']}
            />
               <PieChart
            title="Total Customers" 
            value={5000}
            series={[75, 25]}
            colors={['#475be8', '#e4e8ef']}
            />
               <PieChart
            title="Properties for Cities" 
            value={455}
            series={[75, 25]}
            colors={['#475be8', '#e4e8ef']}
            />
        </Box>
        <Stack mt='25px' width='100%'
        direction={{xs: 'column', lg: 'row'}} gap={4}>
          <TotalRevenue/>
          <PropertyReferrals/>
        </Stack>
    </Box>
  )
}

export default home