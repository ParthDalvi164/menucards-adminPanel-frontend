"use client"
import { styled, Container, Box } from "@mui/material"
import React, { useState } from "react"
import Header from "@/components/header/Header"
import Sidebar from "@/components/sidebar/Sidebar"
import { useParams } from "next/navigation"


const MainWrapper = styled("div")(() => ({
    display: "flex",
    minHeight: "100vh",
    width: "100%"
}))

const PageWrapper = styled("div")(() => ({
    display: "flex",
    flexGrow: 1,
    paddingBottom: "60px",
    flexDirection: "column",
    zIndex: 1,
    backgroundColor: "transparent"
}))

interface Props {
    children: React.ReactNode
}
{
    /* ------------------------------------------- */
}
{
    /* Sidebar */
}
{
    /* ------------------------------------------- */
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    const params = useParams()
    const tenant = params.subdomain

    const [isSidebarOpen, setSidebarOpen] = useState(true)
    const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false)
    return (
        
            <MainWrapper className="mainwrapper">
                {/* <Sidebar
                    isSidebarOpen={isSidebarOpen}
                    isMobileSidebarOpen={isMobileSidebarOpen}
                    onSidebarClose={() => setMobileSidebarOpen(false)}
                /> */}

                <PageWrapper className="page-wrapper">
                    <Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} />

                    <Container
                        sx={{
                            paddingTop: "20px",
                            maxWidth: "1200px"
                        }}
                    >
                        <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
                    </Container>
                </PageWrapper>
            </MainWrapper>
    )
}
