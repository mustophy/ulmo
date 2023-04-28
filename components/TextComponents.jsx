import { Text } from "react-native"
import { COLORS } from "../constants.json"

export const Heading0 = ({ children, style }) => (
    <Text style={{
        fontSize: 48,
        lineHeight: 72,
        color: COLORS.black,
        fontWeight: 600
    }}>
        {children}
    </Text>
)

export const Heading1 = ({ children, style = {} }) => (
    <Text style={[style, {
        fontSize: 32,
        lineHeight: 42,
        color: COLORS.black,
        fontWeight: 600
    }]}>
        {children}
    </Text>
)

export const Heading2 = ({ children, style }) => (
    <Text style={[style, {
        fontSize: 24,
        lineHeight: 32,
        color: COLORS.black,
        fontWeight: 600
    }]}>
        {children}
    </Text>
)

export const Body0 = ({ children, style }) => (
    <Text style={{
        fontSize: 18,
        lineHeight: 27,
        color: COLORS.black,
        fontWeight: 500
    }}>
        {children}
    </Text>
)

export const Body1 = ({ children, style }) => (
    <Text style={[{
        fontSize: 16,
        lineHeight: 24,
        color: COLORS.black,
        fontWeight: 500
    }, style]}>
        {children}
    </Text>
)

export const Body2 = ({ children, style }) => (
    <Text style={[{
        fontSize: 14,
        lineHeight: 21,
        color: COLORS.black,
        fontWeight: 500
    }, style]}>
        {children}
    </Text>
)

export const Body3 = ({ children, style }) => (
    <Text style={[{
        fontSize: 12,
        lineHeight: 16,
        color: COLORS.black,
        fontWeight: 400
    }, style]}>
        {children}
    </Text>
)
