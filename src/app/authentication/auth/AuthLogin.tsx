import React, { useState } from "react"
import {
	Box,
	Typography,
	FormGroup,
	FormControlLabel,
	Button,
	Stack,
	Checkbox
} from "@mui/material"
import Link from "next/link"

import CustomTextField from "@/app/(dashboard)/forms/theme-elements/CustomTextField"

interface loginType {
	onClick?: (userName, password) => void
	title?: string
	subtitle?: JSX.Element | JSX.Element[]
	subtext?: JSX.Element | JSX.Element[]
}

const AuthLogin = ({ onClick, title, subtitle, subtext }: loginType) => {
	const [userName, setUserName] = useState("")
	const [password, setPassword] = useState("")

	return (
		<>
			{title ? (
				<Typography fontWeight="700" variant="h2" mb={1}>
					{title}
				</Typography>
			) : null}

			{subtext}

			<Stack>
				<Box>
					<Typography
						variant="subtitle1"
						fontWeight={600}
						component="label"
						htmlFor="username"
						mb="5px"
					>
						Username
					</Typography>
					<CustomTextField
						variant="outlined"
						fullWidth
						onChange={(e) => setUserName(e.target.value)}
					/>
				</Box>
				<Box mt="25px">
					<Typography
						variant="subtitle1"
						fontWeight={600}
						component="label"
						htmlFor="password"
						mb="5px"
					>
						Password
					</Typography>
					<CustomTextField
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						variant="outlined"
						fullWidth
					/>
				</Box>
				<Stack
					justifyContent="space-between"
					direction="row"
					alignItems="center"
					my={2}
				>
					<FormGroup>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Remeber this Device"
						/>
					</FormGroup>
					<Typography
						component={Link}
						href="/"
						fontWeight="500"
						sx={{
							textDecoration: "none",
							color: "primary.main"
						}}
					>
						Forgot Password ?
					</Typography>
				</Stack>
			</Stack>
			<Box>
				<Button
					color="primary"
					variant="contained"
					size="large"
					fullWidth
					// component={Link}
					type="submit"
					onClick={() => onClick && onClick(userName, password)}
				>
					Log In
				</Button>
			</Box>
			{subtitle}
		</>
	)
}

export default AuthLogin
